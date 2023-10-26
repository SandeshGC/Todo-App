import { Box, Container } from '@mui/material'
import { FC, useState } from 'react'
import Task from './Task'
import { TaskType } from '../types/entities'
import taskList from '../data/index.json'

interface TaskListProps {}

const TaskList: FC<TaskListProps> = ({}) => {
	const [tasks, setTasks] = useState<TaskType[]>(taskList)

	function removeTask(taskId: string) {
		setTasks(prevTasks => {
			const taskIndex = prevTasks.findIndex(task => task.id === taskId)

			const newTasksArray = [...prevTasks]

			newTasksArray.splice(taskIndex, 1)

			return newTasksArray
		})
	}

	function toggleTaskStatus(taskId: string) {
		setTasks(prevTasks => {
			const taskIndex = prevTasks.findIndex(task => task.id === taskId)

			const newTasksArray = [...prevTasks]

			newTasksArray[taskIndex] = {
				...prevTasks[taskIndex],
				isComplete: !prevTasks[taskIndex].isComplete
			}

			return newTasksArray
		})
	}

	return (
		<Container>
			<Box py={4}>
				{tasks.map(task => {
					return (
						<Task
							key={task.id}
							id={task.id}
							title={task.title}
							isComplete={task.isComplete}
							toggleTaskStatus={toggleTaskStatus}
							removeTask={removeTask}
						/>
					)
				})}
			</Box>
		</Container>
	)
}

export default TaskList
