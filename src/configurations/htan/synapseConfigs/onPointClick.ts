import { toolsSql } from './tools'
import { datasetsSql } from './datasets'
import { publicationSql } from './publications'
import { grantsSql } from './grants'
import { projectsSql } from './projects'
import { filesSql } from './files'
import { Query } from 'synapse-react-client/dist/utils/synapseTypes'

const sqlAndEntityMap: {
  [value: string]: string
} = {
  Tools: toolsSql,
  Datasets: datasetsSql,
  Publications: publicationSql,
  Grants: grantsSql,
  Projects: projectsSql,
  Files: filesSql,
}

const generateEncodedQueryForURL = (
  path: string,
  facet: string,
  facetValue: string,
): string => {
  const sql = sqlAndEntityMap[path]
  const query: Query = {
    sql,
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: facet,
        facetValues: [facetValue],
      },
    ],
  }
  return encodeURIComponent(JSON.stringify(query))
}

export const onPointClick = ({
  facetValue,
  type,
}: {
  facetValue: any
  type: any
}) => {
  const typeUpperCase = type.slice(0, 1).toUpperCase() + type.slice(1)
  let facet = 'theme'
  if (typeUpperCase === 'Grants' || typeUpperCase === 'Projects') {
    facet = 'consortium'
  }
  const encodedQuery = generateEncodedQueryForURL(
    typeUpperCase,
    facet,
    facetValue,
  )
  // @ts-ignore
  window.location = `/Explore/${typeUpperCase}?QueryWrapper0=${encodedQuery}`
}
