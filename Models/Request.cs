using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Request
    {
        public int Id { get; set; }
        public string Desc { get; set; }
        public string Answer { get; set; }
        public string Status { get; set; }
        public string File { get; set; }
        public string Sender { get; set; }
        public string Addressee { get; set; }
        public string Addressee_type { get; set; }
        public string Sender_type { get; set; }
        public DateTime Request_date { get; set; }
    }
}