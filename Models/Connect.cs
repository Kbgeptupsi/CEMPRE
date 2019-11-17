using CEMPRE.Models;
using Newtonsoft.Json;
using System.IO;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CEMPRE.Models
{
    public class Connect
    {
        public string Id { get; set; }
        public string ConnectType { get; set; }
        public string IpConnected { get; set; }
        public DateTime DateConnection { get; set; }
    }
}