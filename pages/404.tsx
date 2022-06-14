import type {NextPage} from 'next'
import {ErrorPage} from "../src/screens/error-page";

const NotFound: NextPage = () => {
  return <ErrorPage title='404' text='Oops! Page not found' />
}

export default NotFound
