import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmnService {

  constructor() { }

  getAssetData(){
    return [
      { assetId: 'LM-001', assetName: 'Device A', status: 'Open', type: 'Hardware', department: 'Finance', created: '2023-01-12, 09:45 AM' },
      { assetId: 'LM-002', assetName: 'Device B', status: 'High', type: 'IT', department: 'IT', created: '2023-02-14, 10:20 AM' },
      { assetId: 'LM-003', assetName: 'Device C', status: 'Medium', type: 'Hardware', department: 'Marketing', created: '2023-03-15, 11:15 AM' },
      { assetId: 'LM-004', assetName: 'Device D', status: 'Part due', type: 'Software', department: 'HR', created: '2023-04-17, 01:05 PM' },
      { assetId: 'LM-005', assetName: 'Device E', status: 'Open', type: 'Hardware', department: 'Operations', created: '2023-05-20, 02:40 PM' },
      { assetId: 'LM-006', assetName: 'Device F', status: 'Part due', type: 'Software', department: 'Logistics', created: '2023-06-22, 03:55 PM' },
      { assetId: 'LM-007', assetName: 'Device G', status: 'High', type: 'Hardware', department: 'Support', created: '2023-07-25, 04:45 PM' },
      { assetId: 'LM-008', assetName: 'Device H', status: 'High', type: 'Software', department: 'Development', created: '2023-08-27, 05:10 PM' },
      { assetId: 'LM-009', assetName: 'Device I', status: 'Medium', type: 'Hardware', department: 'Sales', created: '2023-09-30, 06:30 PM' },
      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },

      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },
      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },
      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },
      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },
      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },
      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },

      { assetId: 'LM-003', assetName: 'Device C', status: 'Medium', type: 'Hardware', department: 'Marketing', created: '2023-03-15, 11:15 AM' },
      { assetId: 'LM-004', assetName: 'Device D', status: 'Part due', type: 'Software', department: 'HR', created: '2023-04-17, 01:05 PM' },
      { assetId: 'LM-005', assetName: 'Device E', status: 'Open', type: 'Hardware', department: 'Operations', created: '2023-05-20, 02:40 PM' },
      { assetId: 'LM-006', assetName: 'Device F', status: 'Part due', type: 'Software', department: 'Logistics', created: '2023-06-22, 03:55 PM' },
      { assetId: 'LM-007', assetName: 'Device G', status: 'High', type: 'Hardware', department: 'Support', created: '2023-07-25, 04:45 PM' },
      { assetId: 'LM-008', assetName: 'Device H', status: 'High', type: 'Software', department: 'Development', created: '2023-08-27, 05:10 PM' },
      { assetId: 'LM-009', assetName: 'Device I', status: 'Medium', type: 'Hardware', department: 'Sales', created: '2023-09-30, 06:30 PM' },
      { assetId: 'LM-010', assetName: 'Device J', status: 'Low', type: 'Software', department: 'Admin', created: '2023-10-17, 07:00 PM' },
    ];
  }


}
