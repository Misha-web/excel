import { ExcelComponent } from '@core/ExselComponent'
import { createTable } from '@/components/table/table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return createTable()
  }
}
