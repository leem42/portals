import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import loadingScreen from '../loadingScreen'
import { SynapseConstants } from 'synapse-react-client'
import { HomeExploreConfig } from 'types/portal-config'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'

const computationalSchema: GenericCardSchema = {
  type: SynapseConstants.COMPUTATIONAL,
  title: 'name',
  description: 'summary',
  subTitle: 'softwareType',
  secondaryLabels: ['contributor', 'program', 'grant', 'documentation'],
  link: 'url',
}

const cardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  loadingScreen,
  genericCardSchema: computationalSchema,
}

const sql = 'Select * from syn20337467'
const rgbIndex = 7
const unitDescription = 'Tools'

const computationalTools: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'StandaloneQueryWrapper',
    props: {
      unitDescription,
      rgbIndex,
      loadingScreen,
      link: 'Explore/Computational Tools',
      linkText: 'Explore Computational Tools',
      facet: 'softwareType',
      sql,
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      sql,
      cardConfiguration,
      shouldDeepLink: true,
      name: 'Computational Tools',
      facetsToPlot: ['grant', 'program', 'softwareType'],
      searchConfiguration: {
        searchable: [
          {
            columnName: 'contributor',
          },
          {
            columnName: 'name',
          },
          {
            columnName: 'grant',
          },
          {
            columnName: 'program',
          },
          {
            columnName: 'softwareType',
          },
          {
            columnName: 'summary',
          },
        ],
      },
    },
  },
}

export default computationalTools
