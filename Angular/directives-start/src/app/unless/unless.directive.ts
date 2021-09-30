import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  @Input() set appUnless(value: boolean) {
    if (!value) {
      this.viewContRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContRef: ViewContainerRef
  ) {}
}
