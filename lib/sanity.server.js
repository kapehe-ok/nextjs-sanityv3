import { config } from './sanity.config'
import { createClient } from 'next-sanity'

export const getClient = () => createClient(config);