﻿using System;
using System.Security.Claims;

namespace StateBuilder.Library.Security.Identities
{
    public class AsacIdentity : ClaimsIdentity
    {
        public AsacIdentity(string username, string token, DateTime tokenExpiration)
        {
            Username = username;
            Token = token;
            TokenExpiration = tokenExpiration;
        }

        public string Username { get; }
        public string Token { get; set; }
        public DateTime TokenExpiration { get; set; }
    }
}
