import {Radio} from 'antd';
import * as consts from './tasks-filter.consts';
import * as Types from './tasks-filter.types'

export const TasksFilter = ({defaultSelectedFilter, onChange, disabled}: Types.Props) => {
  return (
    <Radio.Group defaultValue={defaultSelectedFilter} style={{
      marginBottom: 19,
    }}>
      {consts.filtersOrder.map(filterKey => {
        const filter = consts.filtersMap[filterKey];
        return (
          <Radio.Button key={filter.id} onChange={() => onChange(filter.id)} disabled={disabled} value={filterKey}>
            {filter.title}
          </Radio.Button>
        )
      })}
    </Radio.Group>
  )
}
