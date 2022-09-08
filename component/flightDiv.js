export const flight=()=>{
    return ` <div id="oneway">
                        <div>
                            <div>
                                <p>Roundtrip</p>
                            </div>

                            <div>
                                <p>One-way</p>
                            </div>
                            <div>
                                <p>Multi-city</p>
                            </div>

                        </div>
                        <div>
                            <div>
                                <p>1 traveler</p>
                                <span class="material-symbols-outlined">
                                    arrow_drop_down
                                </span>
                            </div>
                            <div>
                                <p>Economy </p>
                                <span class="material-symbols-outlined">
                                    arrow_drop_down
                                </span>
                            </div>

                        </div>

                    </div>


                    <div id="searchDiv">


                        <div class="first-box first-box-flight">

                            <div>

                                <span class="material-symbols-outlined">
                                    pin_drop
                                </span>
                            </div>


                            <input type="text" id="leavingFrom" placeholder="Leaving from">

                        </div>


                        <div class="sec-box sec-box-flight">
                            <div>
                                <span class="material-symbols-outlined">
                                    pin_drop
                                </span>
                            </div>
                            <div>


                                <input type="text" id="goingTo" placeholder="Going to">
                            </div>
                        </div>
                        <div class="third-box third-box-flight">
                            <div>
                                <span class="material-symbols-outlined">
                                    today
                                </span>
                            </div>
                            <div>

                                <p class="heading">Departure</p>

                                <input type="text" name="datefilter" id="startDate" value="" placeholder="08/09/2022" />
                            </div>
                        </div>
                        <div class="forth-box forth-box-flight">
                            <div>
                                <span class="material-symbols-outlined">
                                    today
                                </span>
                            </div>
                            <div>

                                <p class="heading">Returing</p>

                                <input type="text" name="enddatefilter" id="endDate" placeholder="12/09/2022" />
                            </div>
                        </div>

                    </div>
                    <div id="serachItem">


                    </div>

                    <div id="landingDiv">

                    </div>

                    <div>

                    </div>

                    <div id="check">
                        <div>
                            <input type="checkBox" name="" id="" />
                            <span>Add a place to stay</span>
                        </div>
                        <div>
                            <input type="checkBox" name="" id="" />
                            <span>Add car</span>
                        </div>
                    </div>
                    <div>
                        <button class="searchButton" id="searchButton">Search</button>
                    </div>
                </div>`;
}