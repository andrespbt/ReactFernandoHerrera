import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import { calendarWithActiveState, calendarWithEventsState, events, initialState } from '../../fixtures/calendarState';

describe('test on calendarSlice', () => {
  test('should return initial state', () => {
    const state = calendarSlice.getInitialState();

    expect(state).toEqual(initialState);
  });

  test('onSetActive event should activate the event', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));

    expect(state.activeEvent).toEqual(events[0]);
  });

  test('onAddNewEvent should add the event', () => {
    const newEvent = {
      id: '3',
      start: new Date('2022-12-21 13:00:00'),
      end: new Date('2022-12-21 15:00:00'),
      title: 'Meeting with Donald',
      notes: 'some note',
    };

    const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));

    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent should update the event', () => {
    const updatedEvent = {
      id: '1',
      start: new Date('2022-10-21 13:00:00'),
      end: new Date('2022-10-21 15:00:00'),
      title: 'Meeting updated',
      notes: 'some note',
    };

    const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));

    expect(state.events).toContain(updatedEvent);
  });

  test('onDelentEvent should delete the event', () => {
    const state = calendarSlice.reducer(calendarWithActiveState, onDeleteEvent());
    expect(state.activeEvent).toBeNull();
  });

  test('onLoadEvents should stablish events', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));

    expect(state).toEqual(calendarWithEventsState);
  });

  test('onLogoutCalendar should clean state', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onLogoutCalendar());

    expect(state).toEqual(initialState);
  });
});
