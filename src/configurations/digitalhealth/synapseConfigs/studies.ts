import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig, SynapseConfigArray } from 'types/portal-config'
import loadingScreen from '../loadingScreen'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import facetAliases from '../facetAliases'
import { DetailsPageProps } from 'types/portal-util-types'
import { dataDetailPageProps } from './data'
import { toolsDetailPageProps } from './tools'
import { publicationDetailPageProps } from './publications'
export const studySql =
  "SELECT * FROM syn21994974 WHERE ((isDHProject IS NULL) OR (isDHProject <> 'TRUE')) AND (dhPortalIndex = 'TRUE') ORDER BY 'study'"
const sql = studySql
const unitDescription = 'Studies'
const rgbIndex = 9

export const studySchema: GenericCardSchema = {
  type: SynapseConstants.STUDY,
  title: 'study',
  subTitle: 'investigator',
  description: 'studyDescription',
  secondaryLabels: [
    'diagnosis',
    'intervention',
    'numberParticipants',
    'reportedOutcome',
    'deviceType',
    'sensorType',
    'dataCollectionMethod',
    'devicePlatform',
    'deviceLocation',
    'digitalAssessmentCategory',
    'digitalAssessmentDetails',
    'sensorDataType',
    'keywords',
  ],
}

export const studiesCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: studySchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'study',
    matchColumnName: 'study',
  },
  loadingScreen,
}

export const studies: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'StandaloneQueryWrapper',
    props: {
      rgbIndex,
      unitDescription,
      loadingScreen,
      facet: 'theme',
      link: 'Explore/Studies',
      linkText: 'Explore Studies',
      sql,
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      cardConfiguration: studiesCardConfiguration,
      sql,
      shouldDeepLink: true,
      hideDownload: true,
      name: 'Studies',
      loadingScreen,
      facetAliases,
      facetsToPlot: [
        'deviceLocation',
        'devicePlatform',
        'deviceType',
        'diagnosis',
        'digitalAssessmentCategory',
        'intervention',
        'reportedOutcome',
        'sensorType',
      ],
      searchConfiguration: {
        searchable: [
          {
            columnName: 'diagnosis',
          },
          {
            columnName: 'digitalAssessmentCategory',
          },
          {
            columnName: 'digitalAssessmentDetails',
          },
          {
            columnName: 'intervention',
          },
          {
            columnName: 'investigator',
          },
          {
            columnName: 'keywords',
          },
          {
            columnName: 'reportedOutcome',
          },
          {
            columnName: 'study',
          },
        ],
      },
    },
  },
}

export const details: DetailsPageProps = {
  sql,
  synapseConfigArray: [
    {
      name: 'Markdown',
      props: {},
      injectMarkdown: false,
      columnName: 'studyDescriptionLocation',
      title: 'Study Description',
    },
    {
      name: 'Markdown',
      props: {},
      injectMarkdown: true,
      columnName: 'dataAccessInstructions',
      title: 'Data Access',
      className: 'PORTALS-1365',
    },
    {
      name: 'Markdown',
      props: {},
      injectMarkdown: false,
      columnName: 'studyDataDescriptionLocation',
      title: 'Data Description',
    },
    {
      name: 'StandaloneQueryWrapper',
      title: 'Data Files',
      columnName: 'id',
      tableSqlKeys: ['projectId'],
      props: dataDetailPageProps,
    },
    {
      name: 'CardContainerLogic',
      title: 'Suggested Tools',
      columnName: 'id',
      tableSqlKeys: ['suggestedStudies'],
      props: toolsDetailPageProps,
    },
    {
      name: 'CardContainerLogic',
      title: 'Publications',
      columnName: 'id',
      tableSqlKeys: ['synID'],
      props: publicationDetailPageProps,
    },
  ],
}

export const studyDetailPage: SynapseConfigArray = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      isAlignToLeftNav: true,
      ...studiesCardConfiguration,
      rgbIndex,
      facetAliases,
      genericCardSchema: {
        ...studySchema,
        title: 'study',
        link: 'id',
      },
      sql,
    },
  },
  {
    name: 'DetailsPage',
    props: details,
  },
]
