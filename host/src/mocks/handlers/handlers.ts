import {http, HttpResponse, delay} from 'msw';
import {TaskDto, TasksFilterDto} from '@src/entities/task'

const tasks: TaskDto[] = [...new Array(10)].map((value, index) => {
  return {
    id: Date.now(),
    completed: Math.random() > 0.5,
    timestamp: new Date().toISOString(),
    title: 'Задача ' + index,
  }
})

export const handlers = [
  http.get('/api/tasks', async ({request}) => {
    const url = new URL(request.url);
    const filter = url.searchParams.get('filter') as TasksFilterDto;
    let data: TaskDto[] = [];
    if (filter === TasksFilterDto.All) {
      data = tasks;
    } else if (filter === TasksFilterDto.Opened) {
      data = tasks.filter(task => !task.completed)
    } else {
      data = tasks.filter(task => task.completed)
    }
    await delay(1000);
    return HttpResponse.json<TaskDto[]>(data);
  }),
  http.patch(`api/tasks/:id`, async (data) => {
    const {params} = data;
    const id = parseInt(params.id as string)
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task?.completed;
    }
    await delay(1000)
    return HttpResponse.json({});
  })
]
