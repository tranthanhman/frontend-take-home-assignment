import * as Tabs from '@radix-ui/react-tabs'
import React from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { StatusEnum, TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index: React.FC = () => {
  const statuses = Object.values(StatusEnum)

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root defaultValue="all" className="mt-10">
          <Tabs.List className="mb-10 space-x-2" aria-label="Manage your todos">
            <Tabs.Trigger
              className="rounded-full px-8 py-3 font-bold data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              value="all"
            >
              All
            </Tabs.Trigger>
            {statuses.map((status) => (
              <Tabs.Trigger
                key={status}
                className="rounded-full px-6 py-3 font-bold data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value={status}
              >
                {status}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="all">
            <TodoList statuses={statuses} />
          </Tabs.Content>
          {statuses.map((status) => (
            <Tabs.Content key={status} className="TabsContent" value={status}>
              <TodoList statuses={[status]} />
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
