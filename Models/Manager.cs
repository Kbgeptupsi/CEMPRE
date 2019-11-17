using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Manager
    {
        public string Id { get; set; }
        public string Firts_name { get; set; }
        public string Last_name { get; set; }
        public string Ciudad { get; set; }
        public string Dpto { get; set; }
        public string Direction { get; set; }
        public Company Com { get; set; }
        public string Phone { get; set; }
        public DateTime Born_date { get; set; }
        public string Sex { get; set; }
        public string File { get; set; }
    }
}