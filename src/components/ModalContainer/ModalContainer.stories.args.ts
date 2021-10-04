import { commonStyles } from '../../storybook/helper.stories.argtypes';

import { MODAL_CONTAINER_CONSTANTS as CONSTANTS } from '.';

export default {
  ...commonStyles,
  arrow: {
    description: 'Where to render the `<ModalArrow />` for this `<ModalContainer />`.',
    control: { type: 'select' },
    options: [undefined, ...Object.values(CONSTANTS.ARROWS)],
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  children: {
    description: 'Provides the child nodes for this `<ModalContainer />`.',
    control: { type: 'text' },
    table: {
      type: {
        summary: 'ReactNode',
      },
      defaultValue: {
        summary: 'undefined',
      },
    },
  },
  color: {
    description: 'Provides the color of this `<ModalContainer />`.',
    control: { type: 'select' },
    options: [undefined, ...Object.values(CONSTANTS.COLORS)],
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
  },
  elevation: {
    description:
      'Provides the elevation for this `<ModalContainer />`. This only applies to the box-shadow depth.',
    control: { type: 'select' },
    options: [undefined, ...Object.values(CONSTANTS.ELEVATIONS)],
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: '0',
      },
    },
  },
  isPadded: {
    description: 'Identifies if this `<ModalContainer />` should be rendered with padding.',
    control: { type: 'boolean' },
    options: [undefined, ...Object.values(CONSTANTS.ELEVATIONS)],
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
  round: {
    description:
      'Identifies if this `<ModalContainer />` should be rendered with round corners and to what degree.',
    control: { type: 'select' },
    options: [undefined, ...Object.values(CONSTANTS.ROUNDS)],
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: 'false',
      },
    },
  },
};