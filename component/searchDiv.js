export const searchDiv=()=>{
    return ` <div class="first-box first-box-flight">
                <div>
                  <span class="material-symbols-outlined"> pin_drop </span>
                </div>

                <input
                  type="text"
                  id="leavingFrom"
                  placeholder="Leaving from"
                  autocomplete="off"
                />
              </div>

              <div class="sec-box sec-box-flight">
                <div>
                  <span class="material-symbols-outlined"> pin_drop </span>
                </div>
                <div>
                  <input type="text" id="goingTo" autocomplete="off" placeholder="Going to" />
                </div>
              </div>
              <div class="third-box third-box-flight">
                <div>
                  <span class="material-symbols-outlined"> today </span>
                </div>
                <div>
                  <p class="heading">Departure</p>

                  <input
                    type="text"
                    name="datefilter"
                    id="startDate"
                    value=""
                    placeholder="08/09/2022"
                  />
                </div>
              </div>
              <div class="forth-box forth-box-flight">
                <div>
                  <span class="material-symbols-outlined"> today </span>
                </div>
                <div>
                  <p class="heading">Returing</p>

                  <input
                    type="text"
                    name="enddatefilter"
                    id="endDate"
                    placeholder="12/09/2022"
                  />
                </div>
              </div>`;
}