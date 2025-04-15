const ctx = document.getElementById("stackedBarChart").getContext("2d");

let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Emovur", "Wati"],
    datasets: [
      {
        label: "Marketing",
        data: [15000 * 0.785 * 12, 15000 * 0.88 * 12],
        backgroundColor: "#FFD700",
        barThickness: 70, // Set the desired bar width in pixels
      },
      {
        label: "Utility",
        data: [1000 * 0.115 * 12, 1000 * 0.225 * 12],
        backgroundColor: "#32CD32",
        barThickness: 70, // Ensure consistency across datasets
      },
      {
        label: "Chatbot",
        data: [
          Math.ceil((20 / 5) * 2000) * 12,
          Math.ceil((30 / 5) * 2000) * 12,
        ], // Rounded to next integer
        backgroundColor: "#00CED1",
        barThickness: 70, // Ensure consistency across datasets
      },
      {
        label: "Payments",
        data: [50 * 15 * 12, 70 * 20 * 12],
        backgroundColor: "#1E90FF",
        barThickness: 70, // Ensure consistency across datasets
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltip
        callbacks: {
          label: function (tooltipItem) {
            return `${
              tooltipItem.dataset.label
            }: ₹${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        barPercentage: 0.1, // Reduce bar width
        categoryPercentage: 0.6, // Reduce space between bars
      },
      y: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return "₹" + value.toLocaleString();
          },
        },
      },
    },
  },
});

function updateChart() {
  const marketing = parseInt(document.getElementById("marketing").value) || 0;
  const utility = parseInt(document.getElementById("utility").value) || 0;
  const chatbot = parseInt(document.getElementById("chatbot").value) || 0;
  const payments = parseInt(document.getElementById("payments").value) || 0;

  // Update dataset values
  chart.data.datasets[0].data[0] = marketing * 0.785 * 12;
  chart.data.datasets[0].data[1] = marketing * 0.94 * 12;
  chart.data.datasets[1].data[0] = utility * 0.115 * 12;
  chart.data.datasets[1].data[1] = utility * 0.14 * 12;
  chart.data.datasets[2].data[0] = Math.ceil((chatbot / 5) * 2000) * 12; // Round the chatbot value to the next integer
  chart.data.datasets[2].data[1] = Math.ceil((chatbot / 5) * 2000) * 12; // Round the chatbot value to the next integer
  chart.data.datasets[3].data[0] = payments * 15 * 12;
  chart.data.datasets[3].data[1] = payments * 15 * 12;

  // Calculate new marketing difference dynamically
  let marketingDifference =
    (marketing * 0.94 -
      marketing * 0.785 +
      (utility * 0.14 - utility * 0.115) +
      (chatbot / 5) * 2000 +
      payments * 15) *
    12;
  let formattedDifference = `₹${marketingDifference.toLocaleString()}`;

  // Update chart title in the HTML <h6>
  document.getElementById("chartTitle").innerText = `${formattedDifference}`;

  // Update chart display
  chart.update();
}
