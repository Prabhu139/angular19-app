import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-menu',
  templateUrl: './app-table-menu.component.html',
  styleUrls: ['./app-table-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, DragDropModule, FormsModule]
})
export class AppTableMenuComponent {
  allColumns: { name: string, label: string }[];
  displayedColumns: string[];
  searchTerm: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppTableMenuComponent>
  ) {
    this.allColumns = data.allColumns;
    this.displayedColumns = data.displayedColumns;
  }

  get filteredColumns() {
    return this.allColumns.filter(col =>
      col.label.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleColumn(column: string) {
    const index = this.displayedColumns.indexOf(column);
    if (index > -1) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.push(column);
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    const currentList = this.filteredColumns;
    moveItemInArray(currentList, event.previousIndex, event.currentIndex);

    // Reorder `allColumns` based on filtered drag
    this.allColumns = [
      ...this.allColumns.filter(col => !currentList.includes(col)),
      ...currentList
    ];

    // Reorder displayed columns to match new order
    this.displayedColumns = this.allColumns
      .map(col => col.name)
      .filter(name => this.displayedColumns.includes(name));
  }

  isColumnVisible(column: string): boolean {
    return this.displayedColumns.includes(column);
  }
  close() {
    this.dialogRef.close({
      displayedColumns: this.displayedColumns,
      allColumns: this.allColumns
    });
  }
  

  cancel() {
    this.dialogRef.close();
  }
}
