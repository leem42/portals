import { HomeExploreConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import loadingScreen from '../loadingScreen'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { GenerateComponentsFromRowProps } from 'types/portal-util-types'
import { studiesSql, studyCardConfiguration, studiesEntityId } from './studies'
import { toolsSql, toolsEntityId, toolCardConfiguration } from './tools'
import {
  publicationsSql,
  publicationsEntityId,
  publicationsCardConfiguration,
} from './publications'
import { peopleSql, peopleEntityId } from './people'

const unitDescription = 'Grants'
const rgbIndex = 7
export const grantsSql = 'SELECT * FROM syn21438208 ORDER BY ndaCollection'
export const grantsEntityId = 'syn21438208'
const entityId = grantsEntityId
const sql = grantsSql
const facet = 'Program'

export const grantCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  loadingScreen,
  genericCardSchema: {
    type: 'Project',
    title: 'title',
    subTitle: 'primaryInvestigators',
    description: 'abstract',
    secondaryLabels: [
      'grantNumber',
      'institutions',
      'contributors',
      'ndaCollection',
    ],
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'ndaCollection',
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'id',
    matchColumnName: 'id',
    baseURL: 'Explore/Grants/DetailsPage',
  },
}

const Grants: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      unitDescription,
      rgbIndex,
      facet,
      loadingScreen,
      link: 'Explore/Grants',
      linkText: 'Explore Grants',
      initQueryRequest: {
        entityId,
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
      entityId,
      searchConfiguration: {
        searchable: [
          {
            columnName: 'title',
            hintText: 'Somatic mosaicism and autism',
          },
          {
            columnName: 'primaryInvestigators',
            hintText: 'LastName',
          },
          {
            columnName: 'abstract',
            hintText: 'Somatic mutations are de novo mutations',
          },
          {
            columnName: 'grantNumber',
            hintText: 'U01MH106876',
          },
          {
            columnName: 'institutions',
            hintText: 'Boston Children’s Hospital',
          },
          {
            columnName: 'contributors',
            hintText: 'LastName',
          },
        ],
      },
      name: 'Grants',
      unitDescription: 'Grants',
      cardConfiguration: grantCardConfiguration,
      menuConfig: [
        {
          sql,
        },
      ],
    },
  },
}

export const grantsDetailsPageConfiguration: GenerateComponentsFromRowProps = {
  showMenu: true,
  sql,
  entityId,
  synapseConfigArray: [
    {
      name: 'CardContainerLogic',
      columnName: 'id',
      title: 'Studies',
      tableSqlKeys: ['project'],
      props: {
        sql: studiesSql,
        entityId: studiesEntityId,
        ...studyCardConfiguration,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'id',
      title: 'People',
      tableSqlKeys: ['project'],
      props: {
        sql: peopleSql,
        entityId: peopleEntityId,
        type: SynapseConstants.MEDIUM_USER_CARD,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'id',
      title: 'Tools',
      tableSqlKeys: ['project'],
      props: {
        sql: toolsSql,
        entityId: toolsEntityId,
        ...toolCardConfiguration,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'id',
      title: 'Publications',
      tableSqlKeys: ['project'],
      props: {
        sql: publicationsSql,
        entityId: publicationsEntityId,
        ...publicationsCardConfiguration,
      },
    },
  ],
}

export default Grants
