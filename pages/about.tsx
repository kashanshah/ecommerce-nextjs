import type {NextPage} from 'next'
import {Header} from "../src/layouts/header/header";
import {HomeScreen} from "../src/screens/home";
import {trans} from "../src/utils/trans";
import {constants} from '../src/utils/constants';
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <Header title={trans('About')} />
      <HomeScreen/>
    </div>
  )
}

export default About;
