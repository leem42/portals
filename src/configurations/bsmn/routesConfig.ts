import { GenericRoute } from 'types/portal-config'
import routeButtonControlWrapperProps from './routeButtonControlWrapperProps'
import grants, {
  grantCardConfiguration,
  grantsSql,
  grantsEntityId,
  grantsDetailsPageConfiguration,
} from './synapseConfigs/grants'
import studies, {
  studyCardConfiguration,
  studiesSql,
  studiesEntityId,
  studiesDetailPageConfiguration,
} from './synapseConfigs/studies'
import publications from './synapseConfigs/publications'
import tools from './synapseConfigs/tools'
import people from './synapseConfigs/people'

const routes: GenericRoute[] = [
  {
    name: 'Home',
    to: '/',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'Markdown',
        props: {
          ownerId: 'syn21645000',
        },
      },
      {
        name: 'RouteButtonControlWrapper',
        title: 'EXPLORE',
        props: {
          customRoutes: [
            'Grants',
            'Studies',
            'Tools',
            'People',
            'Publications',
          ],
          colors: ['#D46D1E', '#5BB0B5', '#58A148', '#47337D', '#109488'],
        },
      },
    ],
  },
  {
    name: 'Explore',
    isNested: true,
    routes: [
      {
        name: 'Grants',
        to: '/Explore/Grants',
        isNested: true,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: grants.explorePageSynapseObject,
            },
          },
        ],
        routes: [
          {
            name: 'DetailsPage',
            isNested: false,
            to: 'Explore/Grants/DetailsPage',
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  isHeader: true,
                  ...grantCardConfiguration,
                  sql: grantsSql,
                  entityId: grantsEntityId,
                  isAlignToLeftNav: true,
                  secondaryLabelLimit: Infinity,
                  backgroundColor: '#5bb0b5',
                },
              },
              {
                name: 'GenerateComponentsFromRow',
                props: grantsDetailsPageConfiguration,
              },
            ],
          },
        ],
      },
      {
        name: 'Studies',
        to: '/Explore/Studies',
        isNested: true,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: studies.explorePageSynapseObject,
            },
          },
        ],
        routes: [
          {
            name: 'DetailsPage',
            to: '/Explore/Studies/DetailsPage',
            isNested: false,
            synapseConfigArray: [
              {
                name: 'CardContainerLogic',
                isOutsideContainer: true,
                props: {
                  isHeader: true,
                  ...studyCardConfiguration,
                  sql: studiesSql,
                  entityId: studiesEntityId,
                  isAlignToLeftNav: true,
                  secondaryLabelLimit: Infinity,
                  backgroundColor: '#5bb0b5',
                },
              },
              {
                name: 'GenerateComponentsFromRow',
                props: studiesDetailPageConfiguration,
              },
            ],
          },
        ],
      },
      {
        name: 'Tools',
        to: '/Explore/Tools',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: tools.explorePageSynapseObject,
            },
          },
        ],
      },
      {
        name: 'People',
        to: '/Explore/People',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: people.explorePageSynapseObject,
            },
          },
        ],
      },
      {
        name: 'Publications',
        to: '/Explore/Publications',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: publications.explorePageSynapseObject,
            },
          },
        ],
      },
    ],
  },
  {
    name: 'About',
    to: '/About',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'Markdown',
        props: {
          ownerId: 'syn21896405',
        },
      },
    ],
  },
]

export default routes
