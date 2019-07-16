namespace AbschlussaufgabeSS19 {

    document.addEventListener("DOMContentLoaded", function (): void {
        document.getElementById("cart-link").addEventListener("click", toggleCart);
    });

    function toggleCart(): void {
        document.getElementById("cart-overlay").classList.toggle("active");
    }

}
