using NBench;
using TaskManagerAPI.Controllers;

namespace Task.NUnitTest.LoadTest
{
    public class MemoryTests : PerformanceTestStuite<MemoryTests>
    {
        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement)]
        [MemoryMeasurement(MemoryMetric.TotalBytesAllocated)]
        public void GetTaskMemory_Test()
        {
            var taskController = new TaskController();
            var response = taskController.GetTasks();
        }

        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement)]
        [MemoryMeasurement(MemoryMetric.TotalBytesAllocated)]
        public void GetParentTaskMemory_Test()
        {
            var taskController = new TaskController();
            var response = taskController.GetParentTasks();
        }

        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement)]
        [MemoryMeasurement(MemoryMetric.TotalBytesAllocated)]
        public void GetTaskByIdMemory_Test()
        {
            var taskController = new TaskController();
            var response = taskController.GetTaskById(1);
        }
    }
}
