import { createMachine, createActor } from 'xstate';
const countMachine = createMachine({
    context: {
    },
    initial: 'reading',
    states: {
        idle: {
          on: {
            INC: {
              target: 'active',
            },
          },
        },
        active: {
          on: {
            DEC: {
              target: 'idle',
            },
          },
        },
    },
  });