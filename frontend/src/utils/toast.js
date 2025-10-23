import { Toast } from "bootstrap";

export function showToast(message, type = "primary") {
  const container = document.getElementById("toast-container");

  if (!container) {
    console.error("Toast container not found! Make sure <ToastContainer /> is rendered.");
    return;
  }

  // Create toast element
  const toastEl = document.createElement("div");
  toastEl.className = `toast align-items-center text-bg-${type} border-0 mb-2`;
  toastEl.setAttribute("role", "alert");
  toastEl.setAttribute("aria-live", "assertive");
  toastEl.setAttribute("aria-atomic", "true");

  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  // Append to container
  container.appendChild(toastEl);

  // Initialize and show toast
  const toast = new Toast(toastEl, { delay: 3000 });
  toast.show();

  // Remove element after hidden
  toastEl.addEventListener("hidden.bs.toast", () => {
    toastEl.remove();
  });
}
