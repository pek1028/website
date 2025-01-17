let currentTestimonial = 1;
const totalTestimonials = 3;

function navigateTestimonials(direction) {
    // hide testimonial
    document.getElementById(`testimonial-${currentTestimonial}`).classList.remove('active');

    currentTestimonial += direction;
    if (currentTestimonial > totalTestimonials) {
        currentTestimonial = 1;
    } else if (currentTestimonial < 1) {
        currentTestimonial = totalTestimonials;
    }

    // show next testimonial
    document.getElementById(`testimonial-${currentTestimonial}`).classList.add('active');
}
