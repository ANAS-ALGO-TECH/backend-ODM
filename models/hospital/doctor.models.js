import mongoose from 'mongoose';

const worksInHospitalsSchema = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      deafult: 0,
    },
    worksInHospitals: [worksInHospitalsSchema],
  },
  { timeStamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
