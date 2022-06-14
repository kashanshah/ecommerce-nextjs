import type {NextPage} from 'next'
import {Header} from "../src/layouts/header/header";
import {HomeScreen} from "../src/screens/home";
import {trans} from "../src/utils/trans";
import {constants} from '../src/utils/constants';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Header title={trans(constants?.seo?.title)} />
      <HomeScreen/>
    </div>
  )
}

export default Home
