using System;

namespace TaskManagerAPI.Models
{
    public class TaskSearch
    {
        public string Task { get; set; }
        public string ParentTask { get; set; }
        public int? PriorityFrom { get; set; }
        public int? PriorityTo { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}