// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

class Car {
    public string Model { get; set; }
    public string Make { get; set; }
    public int CurrentSpeed { get; private set; }
    public bool EngineRunning { get; private set; }

    public void StartEngine() {
        if (!EngineRunning) {
            Console.WriteLine("Starting engine...");
            EngineRunning = true;
        }
    }

    public void StopEngine() {
        if (EngineRunning) {
            Console.WriteLine("Stopping engine...");
            EngineRunning = false;
            CurrentSpeed = 0;
        }
    }

    public void Accelerate(int speed) {
        if (EngineRunning) {
            Console.WriteLine("Accelerating to {0} mph...", speed);
            CurrentSpeed = speed;
        }
        else {
            Console.WriteLine("Cannot accelerate without the engine running!");
        }
    }

    public void Decelerate(int speed) {
        if (EngineRunning) {
            Console.WriteLine("Decelerating to {0} mph...", speed);
            CurrentSpeed = speed;
        }
        else {
            Console.WriteLine("Cannot decelerate without the engine running!");
        }
    }
}
