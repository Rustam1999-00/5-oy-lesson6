
import {FilterS} from "../FilterBtn/FilterBtn"


export const Filter = ({setStatuse,setGender}) => {
    const statusDatas = ['alive', 'dead', 'unknown']
const genderData =['male','female','unknown','genderless ']

    return (
        <div>
            <h2 className="text-center">Filter</h2>
            <p className="text-center text-primary text-decoration-underline "> clear all</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Filter status
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        {statusDatas.map((item,index) => (<FilterS setStatuse={setStatuse}  text={item} index={index} name='statuse' />))}

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Filter  species
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Filter gender
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        {genderData.map((item,index) => (<FilterS setStatuse={setGender} text={item} index={index} name='gender'/>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}