import { Project } from './project.model';
import { ConfusionMatrixComponent } from '../components/confusion-matrix/confusion-matrix.component';

export class ConfusionMatrix extends Project {
    constructor() {
        super('Confusion Matrix', 'A tool to visualize errors.', ['visualization'], ConfusionMatrixComponent);
    }
}
