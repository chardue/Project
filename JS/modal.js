document.addEventListener("DOMContentLoaded", function () {
  const lectureModal = document.getElementById('lectureModal');
  if (!lectureModal) return;

  lectureModal.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget;

    const title = trigger.getAttribute('data-title');
    const desc = trigger.getAttribute('data-desc');
    const pdf = trigger.getAttribute('data-pdf');
    const exercise = trigger.getAttribute('data-exercise');

    document.getElementById('lectureModalLabel').textContent = title;
    document.getElementById('lectureModalDesc').textContent = desc;
    document.getElementById('pdfLink').href = pdf;
    document.getElementById('exerciseLink').href = exercise;
  });
});
