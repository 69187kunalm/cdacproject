using System;
using System.Collections.Generic;

namespace RentIT.Models
{
    public partial class Location
    {
        public int LocId { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? Pincode { get; set; }
        public int? UserId { get; set; }

        public virtual User? User { get; set; }
    }
}
