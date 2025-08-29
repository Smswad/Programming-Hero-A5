// This functionalities is made for Heart Icon 
let count = 0;
const counter = document.getElementById("wishlisted");

const wishlist_counter = document.querySelectorAll(".add-wishlist").forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        count++;
        counter.textContent = count;
    })
})

// This functionalities is made for Call Button

const callHistory = [];
let coin_counter = parseInt(document.getElementById('coin').innerText);

// National Emergency
const national_counter = document.getElementById('national-call-btn')
    .addEventListener("click", function () {

        const national_helpline = document.getElementById('national-helpline');
        const name = national_helpline.innerText.trim();

        const national_number = document.getElementById('national-number');
        const number = national_number.innerText.trim();

        const national_service = document.getElementById('national-service');
        const service = national_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }

            callHistory.push(data);

            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[6.56rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
        }
        document.getElementById("clear-btn")
            .addEventListener('click', function () {
                history_container.innerText = '';
            })
    })

// Police Helpline
const police_counter = document.getElementById('police-call-btn')
    .addEventListener("click", function () {
        const police_helpline = document.getElementById('police-helpline');
        const name = police_helpline.innerText.trim();

        const police_number = document.getElementById('police-number');
        const number = police_number.innerText.trim();

        const police_service = document.getElementById('police-service');
        const service = police_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[5.19rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })

// Fire Service
const fire_counter = document.getElementById('fire-call-btn')
    .addEventListener("click", function () {
        const fire_helpline = document.getElementById('fire-helpline');
        const name = fire_helpline.innerText.trim();

        const fire_number = document.getElementById('fire-number');
        const number = fire_number.innerText.trim();

        const fire_service = document.getElementById('fire-service');
        const service = fire_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[5.19rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })

// Ambulance Service

const ambulance_counter = document.getElementById('ambulance-call-btn')
    .addEventListener("click", function () {
        const ambulance_helpline = document.getElementById('ambulance-helpline');
        const name = ambulance_helpline.innerText.trim();

        const ambulance_number = document.getElementById('ambulance-number');
        const number = ambulance_number.innerText.trim();

        const ambulance = document.getElementById('ambulance-service');
        const service = ambulance.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[5.19rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })

// Women & Child

const womenAndChild_counter = document.getElementById('womenAndChild-call-btn')
    .addEventListener("click", function () {
        const womenAndChild = document.getElementById('womenAndChild-helpline');
        const name = womenAndChild.innerText.trim();

        const womenAndChild_number = document.getElementById('womenAndChild-number');
        const number = womenAndChild_number.innerText.trim();

        const womenAndChild_service = document.getElementById('womenAndChild-service');
        const service = womenAndChild_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[5.19rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })

// Anti-Corruption

const corruption_counter = document.getElementById('corruption-call-btn')
    .addEventListener("click", function () {
        const corruption = document.getElementById('corruption-helpline');
        const name = corruption.innerText.trim();

        const corruption_number = document.getElementById('corruption-number');
        const number = corruption_number.innerText.trim();

        const corruption_service = document.getElementById('corruption-service');
        const service = corruption_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[5.19rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })

// Electricity

const electricity_counter = document.getElementById('electricity-call-btn')
    .addEventListener("click", function () {
        const electricity = document.getElementById('electricity-helpline');
        const name = electricity.innerText.trim();

        const electricity_number = document.getElementById('electricity-number');
        const number = electricity_number.innerText.trim();

        const electricity_service = document.getElementById('electricity-service');
        const service = electricity_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                                <li
                                    class="bg-[#fafafa] w-[22rem] h-[5.19rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                    <section>
                                        <!-- Service Platform -->
                                        <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                        <!-- Service Number -->
                                        <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>
    
                                    </section>
                                    <!-- Time Duration -->
                                    <section>
                                        <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                    </section>
                                </li>
                    `
                history_container.appendChild(li);
            }
            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })

// BRAC

const brac_counter = document.getElementById('brac-call-btn')
    .addEventListener("click", function () {
        const brac = document.getElementById('brac-helpline');
        const name = brac.innerText.trim();

        const brac_number = document.getElementById('brac-number');
        const number = brac_number.innerText.trim();

        const brac_service = document.getElementById('brac-service');
        const service = brac_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[5.19rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })

// Bangladesh Railway

const railway_counter = document.getElementById('railway-call-btn')
    .addEventListener("click", function () {
        const railway = document.getElementById('railway-helpline');
        const name = railway.innerText.trim();

        const railway_number = document.getElementById('railway-number');
        const number = railway_number.innerText.trim();

        const railway_service = document.getElementById('railway-service');
        const service = railway_service.innerText.trim();

        coin_counter -= 20;

        if (coin_counter < 0) {
            alert("❌ You do not have sufficient coins! To make a call you need at least 20 coin.")
        }
        else {
            console.log(coin_counter);
            alert("📞 Calling " + name + " " + number + "...");
            document.getElementById('coin').innerText = coin_counter;
            const data = {
                service: service,
                number: number,
                time: new Date().toLocaleTimeString(),
            }
            callHistory.push(data);
            const history_container = document.getElementById("history-container")
            history_container.innerText = '';
            for (const data of callHistory) {
                const li = document.createElement("li")
                li.innerHTML = `
                            <li
                                class="bg-[#fafafa] w-[22rem] h-[6.56rem] rounded-[0.5rem] mt-[1rem] p-[1rem] flex flex-rows justify-between items-center">
                                <section>
                                    <!-- Service Platform -->
                                    <h3 class="font-semibold text-[1.125rem]">${data.service}</h3>
                                    <!-- Service Number -->
                                    <h4 class="font-normal text-[1.125rem] text-[#5c5c5c] roboto-normal">${data.number}</h4>

                                </section>
                                <!-- Time Duration -->
                                <section>
                                    <h3 class="font-normal text-[1.125rem] text-[#111111]"><span>${data.time}</span></h3>
                                </section>
                            </li>
                `
                history_container.appendChild(li);
            }
            // Call History Clear Button

            document.getElementById("clear-btn")
                .addEventListener('click', function () {
                    history_container.innerText = '';
                })
        }
    })
