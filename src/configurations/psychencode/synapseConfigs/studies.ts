import { SynapseConstants } from 'synapse-react-client'
import loadingScreen from '../loadingScreen'
import { facetAliases } from './commonProps'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { SynapseConfig, SynapseConfigArray } from 'types/portal-config'
import { DetailsPageProps } from 'types/portal-util-types'
import { dataSql, dataEntityId } from './data'
import { publicationDetailPageProps } from './publications'
export const studiesSql = `SELECT * FROM syn21783965`
export const studiesEntityId = 'syn21783965'
const sql = studiesSql
const rgbIndex = 1

export const studySchema: GenericCardSchema = {
  type: SynapseConstants.STUDY,
  title: 'studyName',
  subTitle: 'dataContributor',
  description: 'studyDescription',
  secondaryLabels: [
    'dataTypes',
    'diagnosis',
    'tissue',
    'nucleicAcidSource',
    'species',
    'numberOfIndividuals',
    'grants',
  ],
}

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: studySchema,
  secondaryLabelLimit: 7,
  titleLinkConfig: {
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'study',
    matchColumnName: 'study',
    isMarkdown: false,
  },
  labelLinkConfig: [
    {
      matchColumnName: 'grants',
      URLColumnName: 'grants',
      isMarkdown: false,
      baseURL: 'Explore/Grants/DetailsPage',
    },
  ],
}

export const studies: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql,
    loadingScreen,
    shouldDeepLink: true,
    cardConfiguration: studyCardConfiguration,
    name: 'Studies',
    facetAliases,
    searchConfiguration: {
      searchable: [
        {
          columnName: 'dataContributor',
        },
        {
          columnName: 'dataTypes',
        },
        {
          columnName: 'diagnosis',
        },
        {
          columnName: 'grants',
        },
        {
          columnName: 'tissue',
        },
        {
          columnName: 'species',
        },
        {
          columnName: 'studyDescription',
        },
        {
          columnName: 'studyName',
        },
      ],
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
      columnName: 'study',
      title: 'Study Description',
    },
    {
      name: 'Markdown',
      props: {
        ownerId: 'syn4921369',
        wikiId: '477467',
      },
      title: 'Access Requirements',
      standalone: true,
    },
    {
      name: 'Markdown',
      props: {},
      columnName: 'methods',
      title: 'Methods',
      resolveSynId: {
        title: true,
      },
    },
    {
      name: 'StandaloneQueryWrapper',
      props: {
        sql: `SELECT id, dataSubtype, dataType, assay FROM ${dataEntityId} WHERE "dataSubtype" = 'metadata'`,
        facetAliases: {
          id: 'File Name',
          dataSubtype: 'Metadata Type',
          dataType: 'Data Type',
          assay: 'Assay',
        },
        rgbIndex,
        title: 'Metadata',
      },
      resolveSynId: {
        value: true,
      },
      tableSqlKeys: ['study'],
      columnName: 'study',
      title: 'Metadata',
    },
    {
      name: 'StandaloneQueryWrapper',
      props: {
        sql: dataSql,
        rgbIndex,
        title: 'Data',
      },
      resolveSynId: {
        value: true,
      },
      tableSqlKeys: ['study'],
      columnName: 'study',
      title: 'Data',
    },
    {
      name: 'CardContainerLogic',
      title: 'Related Studies',
      props: {
        ...studyCardConfiguration,
        sql,
      },
      columnName: 'relatedStudies',
      tableSqlKeys: ['study'],
    },
    {
      name: 'CardContainerLogic',
      title: 'Publications',
      props: publicationDetailPageProps,
      columnName: 'study',
      tableSqlKeys: ['study'],
      resolveSynId: {
        value: true,
      },
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
      ...studyCardConfiguration,
      titleLinkConfig: undefined,
      rgbIndex,
      facetAliases,
      genericCardSchema: studySchema,
      sql,
    },
  },
  {
    name: 'DetailsPage',
    props: details,
  },
]

export const studyDetailPageProps = {
  sql,
  ...studyCardConfiguration,
}
