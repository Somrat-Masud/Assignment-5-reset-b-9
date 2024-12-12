//card-1 er jonno valina jabaScript

document
  .getElementById("donate-Now-Btn")
  .addEventListener("click", function () {
    const donateNowInput = parseFloat(
      document.getElementById("donate-now-input").value
    );
    if (donateNowInput > 0 && !isNaN(donateNowInput)) {
      const donateAddMoney = parseFloat(
        document.getElementById("donate-add-money").innerText
      );
      const totalDonation = donateAddMoney + donateNowInput;
      document.getElementById("donate-add-money").innerText = totalDonation;
      const mainBalance = parseFloat(
        document.getElementById("main-balance").innerText
      );
      const newMainBalance = mainBalance - donateNowInput;
      document.getElementById("main-balance").innerText = newMainBalance;
      my_modal_1.showModal();
      const donateTitle = document.getElementById("donate-title").innerText;
      const todayDate = new Date();

      //transcation history
      const div = document.createElement("div");
      div.innerHTML = `
                <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                <h3 class="md:text-xl font-normal">${donateNowInput} Taka is Donated for ${donateTitle}</h3>
                <p class="text-[#111111B3] text-sm">Date: ${todayDate}</p>
                </div>
    `;
      document.getElementById("transaction-history-1").appendChild(div);
    } else {
      alert("Please Type A Donation Tk For A Number Type");
    }
  });

//card-2 er jonno vanila javaScript
document
  .getElementById("donate-Now-Btn-2")
  .addEventListener("click", function () {
    const donateInputButtonTwo = parseFloat(
      document.getElementById("donate-now-input-2").value
    );
    if (donateInputButtonTwo > 0 && !isNaN(donateInputButtonTwo)) {
      const donateAddMoneyTwo = parseFloat(
        document.getElementById("donate-add-money-2").innerText
      );
      const totalDonationTwo = donateAddMoneyTwo + donateInputButtonTwo;
      document.getElementById("donate-add-money-2").innerText =
        totalDonationTwo;
      const mainBalanceTwo = parseFloat(
        document.getElementById("main-balance").innerText
      );
      const newMainBalanceTwo = mainBalanceTwo - donateInputButtonTwo;
      document.getElementById("main-balance").innerText = newMainBalanceTwo;
      my_modal_1.showModal();
      const donateTitle = document.getElementById("donate-Title-Two").innerText;
      const todayDate = new Date();
      //transcation history
      const div = document.createElement("div");
      div.innerHTML = `
                  <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                  <h3 class="md:text-xl font-normal">${donateInputButtonTwo} Taka is Donated for ${donateTitle}</h3>
                  <p class="text-[#111111B3] text-sm">Date: ${todayDate}</p>
                  </div>
      `;
      document.getElementById("transaction-history-1").appendChild(div);
    } else {
      alert("Please Type A Donation Tk For A Number Type");
    }
  });

//card-3 er jonno vanila javaScript
document
  .getElementById("donate-Now-Btn-3")
  .addEventListener("click", function () {
    const donateInputButtonThree = parseFloat(
      document.getElementById("donate-now-input-3").value
    );
    if (!isNaN(donateInputButtonThree) && donateInputButtonThree > 0) {
      const donateAddMoneyThree = parseFloat(
        document.getElementById("donate-add-money-3").innerText
      );
      const totalDonationThree = donateAddMoneyThree + donateInputButtonThree;
      document.getElementById("donate-add-money-3").innerText =
        totalDonationThree;

      const mainBalanceThree = parseFloat(
        document.getElementById("main-balance").innerText
      );
      const newMainBalanceThree = mainBalanceThree - donateInputButtonThree;
      document.getElementById("main-balance").innerText = newMainBalanceThree;
      // modal show
      my_modal_1.showModal();
      const donateTitleThree =
        document.getElementById("donate-Title-Three").innerText;
      const todayDate = new Date();
      //transaction history
      const div = document.createElement("div");
      div.innerHTML = `
                  <div class="border border-gray-200 rounded-lg p-4 space-y-2">
                  <h3 class="md:text-xl font-normal">${donateInputButtonThree} Taka is Donated for ${donateTitleThree}</h3>
                  <p class="text-[#111111B3] text-sm">Date: ${todayDate}</p>
                  </div>
      `;
      document.getElementById("transaction-history-1").appendChild(div);
    } else {
      alert("Please Type A Donation Tk For A Number Type");
    }
  });

//function

document.getElementById("donationTab").addEventListener("click", function () {
  toggleMenuById("donationDiv");
  document.getElementById("historyTab").classList.remove("bg-[#B4F461]");
  document.getElementById("donationTab").classList.add("bg-[#B4F461]");
});
document.getElementById("historyTab").addEventListener("click", function () {
  toggleMenuById("history-list");
  document.getElementById("donationTab").classList.remove("bg-[#B4F461]");
  document.getElementById("historyTab").classList.add("bg-[#B4F461]");
});

function toggleMenuById(id) {
  document.getElementById("donationDiv").classList.add("hidden");
  document.getElementById("history-list").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

//History list element
