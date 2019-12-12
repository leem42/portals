import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from '../../types/portal-config'
import loadingScreen from '../loadingScreen'
import { facetAliases } from './commonProps'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { Project } from 'synapse-react-client/dist/assets/themed_icons/Project'
const sql = `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01')`
export const grantsSql = `SELECT * FROM syn10142562 WHERE ( "grantType" = 'U54' OR "grantType" = 'U01')`
const unitDescription = 'grants'
const rgbIndex = 3

export const grantsSchema: GenericCardSchema = {
  type: 'Grant',
  title: 'name',
  subTitle: 'Institutions',
  description: 'abstract',
  secondaryLabels: [
    'keyInvestigators',
    'grantNumber',
    'consortium',
    'grantType',
  ],
  link: 'id',
}

export const grants: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      unitDescription,
      loadingScreen,
      rgbIndex: 3,
      facet: 'grantType',
      facetAliases,
      link: 'Explore/Grants',
      linkText: 'Explore Grants',
      initQueryRequest: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql,
          isConsistent: true,
          limit: 25,
          offset: 0,
        },
      },
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperMenu',
    props: {
      rgbIndex,
      unitDescription,
      cardConfiguration: {
        type: SynapseConstants.GENERIC_CARD,
        genericCardSchema: grantsSchema,
        secondaryLabelLimit: 4,
        iconOptions: {
          Grant: Project,
        },
      },
      stackedBarChartConfiguration: {
        loadingScreen,
      },
      name: 'Grants',
      facetAliases,
      searchConfiguration: {
        searchable: [
          {
            columnName: 'name',
            hintText: 'immunity',
          },
          {
            columnName: 'abstract',
            hintText: 'metastasis',
          },
          {
            columnName: 'Institutions',
            hintText: 'Vanderbilt',
          },
          {
            columnName: 'keyInvestigators',
            hintText: 'LastName',
          },
          {
            columnName: 'grantNumber',
            hintText: 'CA202123',
          },
          {
            columnName: 'consortium',
            hintText: 'PS-ON',
          },
          {
            columnName: 'grantType',
            hintText: 'U54',
          },
        ],
      },
      menuConfig: [
        {
          sql,
          facet: 'consortium',
        },
        {
          sql,
          facet: 'grantType',
        },
        {
          sql,
        },
      ],
    },
  },
}
