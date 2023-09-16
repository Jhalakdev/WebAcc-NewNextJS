
import techcss from './techcss.module.css'
import Circle from './Circle';
export default function Technologies() {


    return (<div id='techPage' className={techcss.techPage}>
        {/* <div className={techcss.techtext}><h1>Technologies We Use</h1></div> */}

        <Circle />
        <div className={techcss.textbelow}>
            <span>Scroll Down</span>
            <span>&#8595;</span>
        </div>

    </div>)
}