using System;
using System.Collections.Generic;

namespace RentIT.Models
{
    public partial class Transaction
    {
        public int Id { get; set; }
        public double? Amount { get; set; }
        public DateOnly? Date { get; set; }
        public string? Mode { get; set; }
        public ulong? Status { get; set; }
        public int? Doneby { get; set; }
        public int? Touser { get; set; }
        public DateOnly? Enddate { get; set; }
        public DateOnly? Startdate { get; set; }
        public ulong? Verified { get; set; }
        public int? AppId { get; set; }
        public string? UpiId { get; set; }

        public virtual User? DonebyNavigation { get; set; }
        public virtual User? TouserNavigation { get; set; }
    }
}
