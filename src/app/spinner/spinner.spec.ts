import { SpinnerService } from './spinner.service';

export class MockSpinnerService extends SpinnerService {
    start() {
        console.log('spinner started');
    }
    stop() {
        console.log('spinner stopped');
    }
}
