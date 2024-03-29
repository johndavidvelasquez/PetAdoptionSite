﻿using System;
using System.Collections.Generic;

namespace PetAdoptionSite.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public string MobileNumber { get; set; }
        public string Location { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
