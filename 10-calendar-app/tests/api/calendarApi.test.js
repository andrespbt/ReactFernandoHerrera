import calendarApi from '../../src/api/calendarApi';

describe('test on calendarApi', () => {
  test('should should have default config', () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });

  test("should have x-token on all petition's header", async () => {
    const token = 'ABC-123-XYZ';
    localStorage.setItem('token', token);

    const res = await calendarApi.post('/auth', {
      email: 'test@gmail.com',
      password: '123456',
    });

    expect(res.config.headers['x-token']).toBe(token);
  });
});
