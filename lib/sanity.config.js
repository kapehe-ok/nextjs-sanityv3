import { deskTool } from 'sanity/desk';
import { defineType, defineField } from 'sanity';

export const config = {
  projectId: "k3rebetl",
  dataset: "production",
  apiVersion: "2021-10-21",
  title: "Next.js Conf!",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [
      defineType({
        name: 'article',
        type: 'document',
        title: 'Knowledge Base Articles',
        fields: [
          defineField({
            name: 'internalTitle',
            type: 'string',
            title: 'Internal title',
            description: 'For internal use to make it easy to find and identify'
          }),
          defineField({
            name: 'title',
            type: 'string',
            title: 'Article title',
            description: 'The public facing title'
          }),
          defineField({
            name: 'slug',
            type: 'slug',
            title: 'Article slug',
            options: {
              source: 'title'
            }
          }),
          defineField({
            name: 'body',
            type: 'array',
            title: 'Article content',
            of: [{ type: 'block' }]
          }),
        ]
      })
    ]
  }
}