import mongoose from 'mongoose';

const medicalReportSchema = new mongoose.Schema({}, { timeStamps: true });

export const MedicalReport = mongoose.model(
  'MedicalReport',
  medicalReportSchema
);
