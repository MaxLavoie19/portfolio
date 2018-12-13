import { Project } from './project.model';
import { AStarComponent } from '../components/a-star/a-star.component';

export class AStar extends Project {
    constructor() {
        super('A*', 'A path finding algorithm.', ['Path Finding'], AStarComponent);
    }
}
