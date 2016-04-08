export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('question'),
    this.use('fade'),
    this.reverse('fade')
  );
}
