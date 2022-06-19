import {
    ViewContainerRef,
    ComponentRef,
    ComponentFactoryResolver,
    Injectable,
} from '@angular/core'
import { WidgetRegistry } from '../models';


@Injectable()
export class WidgetFactoryService {
    private resolver: ComponentFactoryResolver
    private registry: WidgetRegistry

    constructor(registry: WidgetRegistry, resolver: ComponentFactoryResolver) {
        this.registry = registry
        this.resolver = resolver
    }

    createWidget(container: ViewContainerRef, type: string): ComponentRef<any> {
        const componentClass = this.registry.getWidgetType(type)

        const componentFactory = this.resolver.resolveComponentFactory(
            componentClass,
        );
        return container.createComponent(componentFactory)
    }
}
