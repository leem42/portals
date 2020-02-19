import { SQLOperator } from 'synapse-react-client/dist/utils/modules/sqlFunctions'
import { SynapseConfig } from './portal-config'

// The props for GenerateComponentsFromRowProps are kept here so that
// the configuration files can import the type

type ResolveSynId = {
  title?: boolean
  value?: boolean
}

export type RowToPropTransform = {
  standalone?: boolean // if true then dont inject props
  resolveSynId?: ResolveSynId
  tableSqlKeys?: string[]
  columnName?: string
  showTitleSeperator?: boolean
}

export type RowSynapseConfig = SynapseConfig & RowToPropTransform
export type GenerateComponentsFromRowProps = {
  showMenu?: boolean // default to true
  searchParams?: {
    [index: string]: string
  }
  sql: string
  entityId: string
  token?: string
  synapseConfigArray: RowSynapseConfig[]
  sqlOperator?: SQLOperator
}
