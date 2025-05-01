import { Component, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppTableMenuComponent } from '../app-table-menu/app-table-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SelectionModel } from '@angular/cdk/collections';
import { CmnService } from '../cmn-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbar,
    MatIcon,
    MatCheckbox,
    MatMenuModule,
    MatTooltipModule
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements AfterViewInit {
  private cmnSerRef = inject(CmnService);
  private dialog = inject(MatDialog);
  
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = ['select', 'assetId', 'assetName', 'status', 'type', 'department', 'created'];
  dataSource = new MatTableDataSource(this.cmnSerRef.getAssetData());
  columnDefs = [
    { name: 'select', label: 'Select' },
    { name: 'assetId', label: 'Asset ID' },
    { name: 'assetName', label: 'Asset Name' },
    { name: 'status', label: 'Status' },
    { name: 'type', label: 'IT Type' },
    { name: 'department', label: 'Department' },
    { name: 'created', label: 'Created' }
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  toggleRow(row: any) {
    this.selection.toggle(row);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getStatusClass(status: string): string {
    return status.toLowerCase().replace(/\s+/g, '-');
  }
  
  openColumnMenu(button: HTMLElement) {
    const rect = button.getBoundingClientRect();
  
    const dialogRef = this.dialog.open(AppTableMenuComponent, {
      data: {
        allColumns: this.columnDefs,
        displayedColumns: this.displayedColumns,
      },
      position: {
        top: '70px',
        right: '10px',
      },
      panelClass: 'column-dialog-panel'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.displayedColumns = result.displayedColumns;
        this.columnDefs = result.allColumns;
      }
    });
  }
  

  toggleColumn(column: string) {
    const index = this.displayedColumns.indexOf(column);
    if (index > -1) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.push(column);
    }
  }

  isColumnVisible(column: string): boolean {
    return this.displayedColumns.includes(column);
  }

  reorderColumns(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }
  
}